// Import object dari model
const {getAllOrder} = require('../model/order')
// Import helper
const helper = require('../helper')
const { request } = require('express')
const { response } = require('../helper')

module.exports = {
    getAllOrder: async (request, response) => {
        try {
            const result = await getAllOrder()
            if (result.length > 0) {
                return helper.response(response, 200, "Get Order Success", result)
            } else {
                return helper.response(response, 404, "Order Not Found", result)
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    }
}