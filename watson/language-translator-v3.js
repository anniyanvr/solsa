// Autogenerated. DO NOT MODIFY

const solsa = require('../solsa')
const _LanguageTranslatorV3 = require('watson-developer-cloud/language-translator/v3')

class LanguageTranslatorV3 extends solsa.Service {
  constructor (name) {
    super(name, true)

    this.url = this.addSecret(`binding-${name}`, 'url')
    this.apikey = this.addSecret(`binding-${name}`, 'apikey')
  }
  async listModels (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _LanguageTranslatorV3({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.listModels(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async createModel (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _LanguageTranslatorV3({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.createModel(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async getModel (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _LanguageTranslatorV3({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.getModel(params, (err, res) => {
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
        this.delegate = new _LanguageTranslatorV3({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.deleteModel(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async translate (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _LanguageTranslatorV3({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.translate(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async listIdentifiableLanguages (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _LanguageTranslatorV3({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.listIdentifiableLanguages(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async identify (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _LanguageTranslatorV3({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.identify(params, (err, res) => {
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
        service: 'language-translator',
        plan: 'lite',
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

module.exports = LanguageTranslatorV3
