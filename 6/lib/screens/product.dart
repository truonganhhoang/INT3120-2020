import 'dart:ffi';

import 'package:flutter/material.dart';
import 'package:CWCFlutter/screens/product_detail.dart';
class Products extends StatefulWidget {
  @override
  _ProductsState createState() => _ProductsState();
}

class _ProductsState extends State<Products> {
  var product_list = [
    {
      "name": "Foods",
      "picture": "images/Woman.jpeg",
      "old_price": 120,
      "price": 85,
    },
    {
      "name": "The Family",
      "picture": "images/head.jpg",
      "old_price": 100,
      "price": 50,
    },
    {
      "name": "Vegetables",
      "picture": "images/grapefruit.jpeg",
      "old_price": 100,
      "price": 50,
    },
    {
      "name": "Fuit",
      "picture": "images/ham.jpeg",
      "old_price": 100,
      "price": 50,
    },
    {
      "name": "Meat, Poultry, and Seafood",
      "picture": "images/broccoli.jpeg",
      "old_price": 100,
      "price": 50,
    },
    {
      "name": "The Supermarket",
      "picture": "images/broccoli.jpeg",
      "old_price": 100,
      "price": 50,
    },
    {
      "name": "Restaurant and Cocktail Lounge",
      "picture": "images/broccoli.jpeg",
      "old_price": 100,
      "price": 50,
    },
    {
      "name": "Restaurant Verbs",
      "picture": "images/broccoli.jpeg",
      "old_price": 100,
      "price": 50,
    },

  ];

  @override
  Widget build(BuildContext context) {
    return GridView.builder(
        itemCount: product_list.length,
        gridDelegate:
        new SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2),
        itemBuilder: (BuildContext context, int index) {
          return Single_prod(
            prod_name: product_list[index]['name'],
            prod_pricture: product_list[index]['picture'],
            prod_old_price: product_list[index]['old_price'],
            prod_price: product_list[index]['price'],
          );
        });
  }
}

class Single_prod extends StatelessWidget {
  final prod_name;
  final prod_pricture;
  final prod_old_price;
  final prod_price;

  Single_prod({
    this.prod_name,
    this.prod_pricture,
    this.prod_old_price,
    this.prod_price,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Hero(
          tag: prod_name,
          child: Material(
            child: InkWell(
               onTap: () => Navigator.of(context).push(new MaterialPageRoute(
                  builder: (context) => new ProductDetails(
                    // here we are passing the values of the product to the product detail // chuyển product đến product detail
                    product_detail_name: prod_name,
                    product_detail_picture: prod_pricture,
                  ))),

              child: GridTile(
                  footer: Container(
                    color: Colors.white70,
                    child: ListTile(
                      leading: Text(
                        prod_name,
                        style: TextStyle(fontWeight: FontWeight.bold),
                      ),
                    ),
                  ),
                  child: Image.asset(
                    prod_pricture,
                    fit: BoxFit.cover,
                  )),
            ),
          )),
    );
  }
}
