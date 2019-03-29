// Autogenerated. DO NOT MODIFY

const solsa = require('../solsa')
const _DiscoveryV1 = require('watson-developer-cloud/discovery/v1-generated')

class DiscoveryV1 extends solsa.Service {
  constructor (name) {
    super(name, true)

    this.url = this.addSecret(`binding-${name}`, 'url')
    this.apikey = this.addSecret(`binding-${name}`, 'apikey')
  }
  async listEnvironments (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.listEnvironments(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async createEnvironment (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.createEnvironment(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async getEnvironment (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.getEnvironment(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async updateEnvironment (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.updateEnvironment(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async deleteEnvironment (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.deleteEnvironment(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async testConfigurationInEnvironment (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.testConfigurationInEnvironment(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async listConfigurations (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.listConfigurations(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async createConfiguration (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.createConfiguration(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async getConfiguration (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.getConfiguration(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async updateConfiguration (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.updateConfiguration(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async deleteConfiguration (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.deleteConfiguration(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async listCollections (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.listCollections(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async createCollection (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.createCollection(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async getCollection (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.getCollection(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async updateCollection (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.updateCollection(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async deleteCollection (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.deleteCollection(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async addDocument (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.addDocument(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async getDocumentStatus (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.getDocumentStatus(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async updateDocument (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.updateDocument(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async deleteDocument (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.deleteDocument(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async listCollectionFields (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.listCollectionFields(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async query (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.query(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async queryNotices (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.queryNotices(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async listTrainingData (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.listTrainingData(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async addTrainingData (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.addTrainingData(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async deleteAllTrainingData (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.deleteAllTrainingData(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async getTrainingData (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.getTrainingData(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async deleteTrainingData (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.deleteTrainingData(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async listTrainingExamples (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.listTrainingExamples(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async createTrainingExample (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.createTrainingExample(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async getTrainingExample (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.getTrainingExample(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async updateTrainingExample (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.updateTrainingExample(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async deleteTrainingExample (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.deleteTrainingExample(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async listFields (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.listFields(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async federatedQuery (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.federatedQuery(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async federatedQueryNotices (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.federatedQueryNotices(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async queryEntities (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.queryEntities(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async queryRelations (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.queryRelations(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async listExpansions (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.listExpansions(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async createExpansions (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.createExpansions(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async deleteExpansions (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.deleteExpansions(params, (err, res) => {
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
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.deleteUserData(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async createEvent (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.createEvent(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async queryLog (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.queryLog(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async getMetricsQuery (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.getMetricsQuery(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async getMetricsQueryEvent (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.getMetricsQueryEvent(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async getMetricsQueryNoResults (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.getMetricsQueryNoResults(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async getMetricsEventRate (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.getMetricsEventRate(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async listCredentials (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.listCredentials(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async createCredentials (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.createCredentials(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async getSourceCredentials (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.getSourceCredentials(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async updateCredentials (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.updateCredentials(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async deleteCredentials (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.deleteCredentials(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async getMetricsQueryTokenEvent (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.getMetricsQueryTokenEvent(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async getTokenizationDictionaryStatus (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.getTokenizationDictionaryStatus(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async createTokenizationDictionary (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.createTokenizationDictionary(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async deleteTokenizationDictionary (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.deleteTokenizationDictionary(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async getStopwordListStatus (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.getStopwordListStatus(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async createStopwordList (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.createStopwordList(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async deleteStopwordList (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.deleteStopwordList(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async listGateways (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.listGateways(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async createGateway (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.createGateway(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async getGateway (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.getGateway(params, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  async deleteGateway (params) {
    return new Promise((resolve, reject) => {
      if (this.delegate === undefined) {
        this.delegate = new _DiscoveryV1({ version: '2018-05-01', iam_apikey: this.apikey, url: this.url })
      }
      this.delegate.deleteGateway(params, (err, res) => {
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
        service: 'discovery',
        plan: 'lite',
        servicetype: 'IAM'
      }
    }
    archive.addResource(svc, this.name + '-svc.yaml')
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
    archive.addResource(binding, this.name + '-binding.yaml')
  }
}

module.exports = DiscoveryV1
