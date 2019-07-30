/*
 * Copyright 2019 IBM Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as merge from 'deepmerge'
import { dynamic } from './helpers'

/** @internal */
export class Solsa {
  [k: string]: any
  bundle: Bundle

  constructor (bundle: Bundle) {
    this.bundle = bundle
  }

  getResources (...args: any[]) {
    if (this.skip) return []
    const objs = this.bundle.getResources(...args)
    if (Array.isArray(this.patches)) {
      for (let i = 0; i < objs.length; i++) {
        if (this.patches[i]) objs[i].obj = merge(objs[i].obj, this.patches[i])
      }
    } else if (this.patches) {
      objs[0].obj = merge(objs[0].obj, this.patches)
    }
    return objs
  }

  getImages () {
    return this.skip ? [] : this.bundle.getImages()
  }
}

export class Bundle {
  [k: string]: any
  /** @internal */
  solsa = new Solsa(this)

  constructor () {
    Object.defineProperty(this, 'solsa', { enumerable: false })
  }

  useExisting () {
    this.solsa.skip = true
    return this
  }

  getResources (...args: any[]): dynamic[] {
    const resources = []
    for (let value of Object.values(this)) {
      if (value instanceof Bundle) {
        resources.push(...value.solsa.getResources(...args))
      }
    }
    return resources
  }

  getImages (): { name: string, build?: string, main?: string }[] {
    const images = []
    for (let value of Object.values(this)) {
      if (value instanceof Bundle) {
        images.push(...value.solsa.getImages())
      }
    }
    return images
  }
}

export class Resource extends Bundle {
  name: string
  object: dynamic

  constructor ({ name, object }: { name: string, object: dynamic }) {
    super()
    this.name = name
    this.object = object
  }

  getResources () {
    return [{ obj: merge({ metadata: { name: this.name } }, this.object), name: this.name + '-resource.yaml' }]
  }
}
