import request from 'supertest';
import '@babel/polyfill'
import app from './app'

describe('api', () => {
  let intro
  let rights
  let scenarios
  let help

  beforeEach(() => {
    intro = [
      {para: 'para'},
      {para: 'para'}
    ]

    rights = [
      {
        id: 1,
        title: 'right',
        detail: [ {para: 'para'} ]
      }
    ]

    rights = [
      {
        id: 'a',
        title: 'scenario',
        detail: [ {para: 'para'}]
      }
    ]

    help = [
      {
        id: 'help1',
        title: 'help',
        detail: [ {para: 'para'}]
      }
    ]

    app.locals.intro = intro
    app.locals.rights = rights
    app.locals.scenarios = scenarios
    app.locals.help = help
  })

  describe('get /api/v1/intro', () => {
    it('should return a 200 status and an array of intro paras', async () => {
      const response = await request(app).get('/api/v1/intro')
      expect(response.status).toBe(200)
    })
  })

  describe('get /api/v1/rights', () => {
    it('should return a 200 status and an array of rights', async () => {
      const response = await request(app).get('/api/v1/rights')
      expect(response.status).toBe(200) 
    })
  })

  describe('get /api/v1/scenarios', () => {
    it('should return a 200 status and an array of scenarios', async () => {
      const response = await request(app).get('/api/v1/scenarios')
      expect(response.status).toBe(200)
    })
  })

  describe('get /api/v1/help', () => {
    it('should return a 200 status and an array of help paras', async () => {
      const response = await request(app).get('/api/v1/help')
      expect(response.status).toBe(200)
    })
  })
})