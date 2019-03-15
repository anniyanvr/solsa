let needle = require('needle')

// FIXME: Streams.knative limitation -- must be in same namespace as the Streams.knative controller pod
//        So we hardwire that in the yaml and also hardwire a cross-NS service reference in all needle
//        calls from the wrapper service to the service in the streams NS that wraps the StreamsJob
const StreamsKNativeNS = 'streams'
const SVC_PORT = 8080

let streams = {
  StreamsJob: class StreamsJob {
    constructor (name, sab) {
      this.name = name
      this.sab = sab
    }

    async listOperators (name) {
      const url = `http://${name}-svc` + '.' + StreamsKNativeNS + ':' + SVC_PORT + '/list'
      console.log('listOperators: ' + url)
      return needle('get', url, { json: true })
        .then(result => result.body)
    }

    _yaml (archive, target, yamlDir) {
      const j = {
        apiVersion: 'streams.ibm.com/v1alpha1',
        kind: 'Job',
        metadata: {
          name: this.name,
          namespace: StreamsKNativeNS
        },
        spec: {
          requestedPes: 1,
          processingElement: {
            imagePullPolicy: 'IfNotPresent',
            runtimeTraceLevel: 'DEBUG',
            sabName: this.sab,
            restartFailedPod: true
          }
        }
      }
      archive.addYaml(j, this.name + '-job.yaml')

      const svc = {
        apiVersion: 'v1',
        kind: 'Service',
        metadata: {
          name: this.name + '-svc',
          namespace: StreamsKNativeNS
        },
        spec: {
          ports: [{ port: SVC_PORT }],
          selector: {
            app: 'streams',
            svc: 'pe'
          }
        }
      }
      archive.addYaml(svc, this.name + '-svc.yaml')
    }
  }
}

module.exports = streams
