import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:CWCFlutter/api/word_api.dart';
import 'package:CWCFlutter/notifier/auth_notifier.dart';
import 'package:CWCFlutter/notifier/word_notifier.dart';
import 'package:CWCFlutter/screens/detail.dart';
import 'package:CWCFlutter/screens/word_form.dart';
import 'package:provider/provider.dart';
class ProductDetails extends StatefulWidget {
  final product_detail_name;
  final product_detail_new_price;
  final product_detail_old_price;
  final product_detail_picture;

  ProductDetails({
    this.product_detail_name,
    this.product_detail_new_price,
    this.product_detail_old_price,
    this.product_detail_picture
  }
  
  );

  @override
  _ProductDetailsState createState() => _ProductDetailsState();
}

class _ProductDetailsState extends State<ProductDetails> {

  @override
  Widget build(BuildContext context) {
    
    AuthNotifier authNotifier = Provider.of<AuthNotifier>(context);
    WordNotifier foodNotifier = Provider.of<WordNotifier>(context);

    Future<void> _refreshList() async {
      getFoods(foodNotifier);
    }
 
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'english app',
        ),
        actions: <Widget>[
          // action button
          
         ],
      ),
// hết thanh menu
      body: new RefreshIndicator(
        child: ListView.separated(
          itemBuilder: (BuildContext context, int index) {
            return ListTile(
              leading: Image.network(
                foodNotifier.foodList[index].image != null
                    ? foodNotifier.foodList[index].image
                    : 'https://www.testingxperts.com/wp-content/uploads/2019/02/placeholder-img.jpg',
                width: 120,
                fit: BoxFit.fitWidth,
              ),
              title: Text(foodNotifier.foodList[index].name),
              subtitle: Text(foodNotifier.foodList[index].category),
              onTap: () {
                foodNotifier.currentFood = foodNotifier.foodList[index];
                Navigator.of(context).push(MaterialPageRoute(builder: (BuildContext context) {
                  return WordDetail();
                }));
              },
            );
          },
          itemCount: foodNotifier.foodList.length,
          separatorBuilder: (BuildContext context, int index) {
            return Divider(
              color: Colors.black,
            );
          },
        ),
        onRefresh: _refreshList,
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          foodNotifier.currentFood = null;
          Navigator.of(context).push(
            MaterialPageRoute(builder: (BuildContext context) {
              return WordForm(
                isUpdating: false,
              );
            }),
          );
        },
        child: Icon(Icons.add),
        foregroundColor: Colors.white,
      ),

   );
      
  }
}