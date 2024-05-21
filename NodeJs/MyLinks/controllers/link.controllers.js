const { Link } = require("../models/links.model");

const getLinks = async (req, res) => {
    try {
        const query = req.query;
        const links = await Link.find({ ...query })
        return res.send({ links })
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
}
const getLinkId = async (req, res) => {
    const { id } = req.params;
    try {
        const link = await Link.findById(id).populate('UserId')
        // const link = await Link.findById(id)
        return res.send(link)
    } catch (err) {
        console.error(err);
        res.status(400).send(err);
    }
}

const createLink = async (req, res) => {
    const body = req.body
    try {
        console.log(body)
        body.UserId = req.user._id
        const newLink = new Link(body)
        await newLink.save()
        return res.send({ msg: 'Link created', newLink })
    } catch (err) {
        console.log(err);
        res.status(400).res.send(err);
    }
}
const deleteLink = async (req, res) => {
    const id = req.params.id;
    try {
        await Link.findByIdAndDelete(id)
        return res.send({ msg: 'Link deleted' })
    } catch (err) {
        console.log(err);
        res.status(400).res.send(err);
    }
}
const updateLink = async (req, res) => {
    const id = req.params.id
    const body = req.body
    try {
        await Link.findByIdAndUpdate(id, body)
        return res.send({ msg: 'Link updated' })
    } catch (err) {
        console.log(err);
        res.status(400).res.send(err);
    }
}
module.exports = { getLinks, getLinkId, createLink, deleteLink, updateLink }