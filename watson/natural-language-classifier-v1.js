// Autogenerated. DO NOT MODIFY

const solsa = require('../solsa')
const _NaturalLanguageClassifierV1 = require('watson-developer-cloud/natural-language-classifier/v1-generated')

class NaturalLanguageClassifierV1 extends solsa.Service {
  constructor (name) {
    super(name, true)

    this.url = this.addSecret(`binding-${name}`, 'url')
    this.apikey = this.addSecret(`binding-${name}`, 'apikey')
  }
  async classify (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _NaturalLanguageClassifierV1({ iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.classify(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async classifyCollection (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _NaturalLanguageClassifierV1({ iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.classifyCollection(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async listClassifiers (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _NaturalLanguageClassifierV1({ iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.listClassifiers(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async createClassifier (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _NaturalLanguageClassifierV1({ iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.createClassifier(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async getClassifier (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _NaturalLanguageClassifierV1({ iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.getClassifier(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async deleteClassifier (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _NaturalLanguageClassifierV1({ iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.deleteClassifier(params, (err, res) => {
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
        service: 'natural-language-classifier',
        plan: 'standard',
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

module.exports = NaturalLanguageClassifierV1
