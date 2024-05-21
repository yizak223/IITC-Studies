const { Router } = require('express')
const router = Router()
const { Link } = require('../models/links.model')
const { getLinks, getLinkId, createLink, deleteLink, updateLink } = require('../controllers/link.controllers')
const { auth } = require('../middleware/auth')

let links = []

//http://localhost:3100/api/v1/links/?UserId=65c9f0e87a6cf06b926e461f

router.get('/', getLinks)

router.get('/:id', getLinkId)

router.post('/', auth, createLink)

router.delete('/:id', deleteLink)

router.patch('/:id', updateLink)

module.exports = router