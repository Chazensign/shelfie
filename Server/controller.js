module.exports = {
  getAll(req, res) {
    const db = req.app.get('db')
    db.get_inventory()
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => console.log(err))
  },
  deleteProd(req, res) {
    const db = req.app.get('db')
    db.delete_product(+req.params.id)
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => console.log(err))
  },
  getOne(req, res) {
    const db = req.app.get('db')
    db.get_one(+req.params.id)
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => console.log(err))
  },
  editProduct(req, res) {
    const db = req.app.get('db')
    const {name, price, img, id} = req.body
    db.update_product(name, price, img, +id)
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => console.log(err))
  },
  addProduct(req, res) {
    const db = req.app.get('db')
    const {name, price, img} = req.body
    db.add_product(name, price, img)
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => console.log(err))
  }

}