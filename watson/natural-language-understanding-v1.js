// Autogenerated. DO NOT MODIFY

const solsa = require('../solsa')
const _NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1-generated')

class NaturalLanguageUnderstandingV1 extends solsa.Service {
  constructor (name) {
    super(name, true)

    this.url = this.addSecret(`binding-${name}`, 'url')
    this.apikey = this.addSecret(`binding-${name}`, 'apikey')
  }
  async analyze (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _NaturalLanguageUnderstandingV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.analyze(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async listModels (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _NaturalLanguageUnderstandingV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.listModels(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async deleteModel (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _NaturalLanguageUnderstandingV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
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
        plan: 'free',
        servicetype: 'IAM'
      }
    }
    archive.addYaml(svc, this.name + '-svc.yaml')
    const binding = {
      apiVersion: 'ibmcloud.seed.ibm.com/v1beta1',
      kind: 'Binding',
      metadata: {
        name: `binding-${this.name}`
      },
      spec: {
        bindingFrom: {
          name: this.name
        },
        servicetype: 'IAM'
      }
    }
    archive.addYaml(binding, this.name + '-binding.yaml')
  }
}

module.exports = NaturalLanguageUnderstandingV1
