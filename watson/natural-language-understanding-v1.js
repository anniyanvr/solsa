// Autogenerated. DO NOT MODIFY
const _NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1-generated')

class NaturalLanguageUnderstandingV1 {
  constructor (name) {
    this.name = name
    this.secrets = {
      url: { valueFrom: { secretKeyRef: { name: `binding-${name}`, key: 'url' } } },
      apikey: { valueFrom: { secretKeyRef: { name: `binding-${name}`, key: 'apikey' } } }
    }
  }
  async analyze (params, url, apikey) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _NaturalLanguageUnderstandingV1({ version: '2018-05-01', iam_apikey: apikey, url })
      }
      this.delegate.analyze(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async listModels (params, url, apikey) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _NaturalLanguageUnderstandingV1({ version: '2018-05-01', iam_apikey: apikey, url })
      }
      this.delegate.listModels(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async deleteModel (params, url, apikey) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _NaturalLanguageUnderstandingV1({ version: '2018-05-01', iam_apikey: apikey, url })
      }
      this.delegate.deleteModel(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }

  _yaml (archive) {
    const svc = {
      apiVersion: 'ibmcloud.seed.ibm.com/v1beta1',
      kind: 'Service',
      metadata: {
        name: this.name
      },
      spec: {
        service: 'natural-language-understanding',
        plan: 'lite',
        servicetype: 'IAM'
      }
    }
    archive.addYaml(svc, this.name + '-svc.yaml')
  }
}

module.exports = NaturalLanguageUnderstandingV1
