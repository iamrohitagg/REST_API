const sql = require("./db")

//constructor for customer
const Customer = function(customer){
    this.email = customer.email
    this.name = customer.name
    this.active = customer.active
}

Customer.create = (newCustomer, result) =>{
    sql.query("insert into customers set ? ", newCustomer,
    (err, res) => {
        if(err) throw err
        // console.log("inserted")
        result(null, err)
        return
    })
}

Customer.findById = (customer, result) =>{
    sql.query(`select * from customers where id = ${`customerId`}`,
     (err, result)=>{
        if(err) throw err
        if(result.length){
            result(null, result[0])
        }
        result({kind : "not_found"}, null)
     }
)}

Customer.getAll = (customer, result) =>{
    sql.query("select * from customer ", 
    (err, res) =>{
        if(err) throw err
        console.log("customers", result)
        result(null, err)
    })
}
Customer.updateById = (id, customer, result) =>{
    //updates the customer
    sql.query(`update customers set email = ?, name = ?, active = ? id = ${`customerId`} 
    where id =${``}`,
     (err, result)=>{   
        customer.name,
        customer.active,(err,result) =>{
            return (null, err)
            return
        }
        if(res.affectedRows == 0){
            result({kind : "not_found"}, null)
            return
        }
     }
}
Customer.remove = (id, result) =>{
    //remove a customer
    sql.query(`delete * from customers where id = ${`customerId`}`,
     (err, result)=>{
        if(err) throw err
        if(result.length){
            result(null, result[0])
        }
        result({kind : "not_found"}, null)
     }
}
Customer.removeAll = (result) =>{
    //remove all the customers in database
}