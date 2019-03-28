// Autogenerated. DO NOT MODIFY

const solsa = require('../solsa')
const _VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3-generated')

class VisualRecognitionV3 extends solsa.Service {
  constructor (name) {
    super(name, true)

    this.url = this.addSecret(`binding-${name}`, 'url')
    this.apikey = this.addSecret(`binding-${name}`, 'apikey')
  }
  async classify (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _VisualRecognitionV3({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.classify(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async detectFaces (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _VisualRecognitionV3({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.detectFaces(params, (err, res) => {
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
        this.delegate = new _VisualRecognitionV3({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
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
        this.delegate = new _VisualRecognitionV3({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
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
        this.delegate = new _VisualRecognitionV3({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.getClassifier(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async updateClassifier (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _VisualRecognitionV3({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.updateClassifier(params, (err, res) => {
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
        this.delegate = new _VisualRecognitionV3({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.deleteClassifier(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async getCoreMlModel (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _VisualRecognitionV3({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.getCoreMlModel(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async deleteUserData (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _VisualRecognitionV3({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.deleteUserData(params, (err, res) => {
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
        service: 'watson-vision-combined',
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

module.exports = VisualRecognitionV3
