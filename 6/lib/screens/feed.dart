import 'package:CWCFlutter/api/food_api.dart';
import 'package:CWCFlutter/notifier/auth_notifier.dart';
import 'package:CWCFlutter/notifier/food_notifier.dart';
import 'package:CWCFlutter/pages/profile.dart';
import 'package:CWCFlutter/pages/thefamily.dart';
import 'package:CWCFlutter/screens/detail.dart';
import 'package:CWCFlutter/screens/food_form.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class Feed extends StatefulWidget {
  @override
  _FeedState createState() => _FeedState();
}

class _FeedState extends State<Feed> {
  @override
  void initState() {
    FoodNotifier foodNotifier = Provider.of<FoodNotifier>(context, listen: false);
    getFoods(foodNotifier);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    AuthNotifier authNotifier = Provider.of<AuthNotifier>(context);
    FoodNotifier foodNotifier = Provider.of<FoodNotifier>(context);

    Future<void> _refreshList() async {
      getFoods(foodNotifier);
    }

    print("building Feed");
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'english app',
        ),
        actions: <Widget>[
          // action button
          FlatButton(
            onPressed: () => signout(authNotifier),
            child: Text(
              "Logout",
              style: TextStyle(fontSize: 20, color: Colors.white),
            ),
          ),
        ],
      ),
      //thanh menu
      drawer: new Drawer(
        child: new ListView(
          children: <Widget>[
            // header
            new UserAccountsDrawerHeader(accountName: Text(authNotifier.user != null ? authNotifier.user.displayName : "Feed",),
              currentAccountPicture: GestureDetector(
                child: new CircleAvatar(
                  backgroundColor: Colors.grey,
                  child: Icon(Icons.person, color: Colors.white,
                  ), 
                ),
              ),
              decoration: new BoxDecoration(
                  color: Colors.blue
              ),
            ),

            //body

            InkWell(
              onTap: (){
                Navigator.push(context, MaterialPageRoute(builder: (context)=>new Feed()));
              },
              child: ListTile(
                title: Text('Home Page'),
                leading: Icon(Icons.home, color: Colors.blue,),
              ),
            ),

            InkWell(
              onTap: (){
                Navigator.push(context, MaterialPageRoute(builder: (context)=>new Home()));
              },
              child: ListTile(
                title: Text('profile'),
                leading: Icon(Icons.person, color: Colors.blue,),
              ),
            ),

            InkWell(
              onTap: (){},
              child: ListTile(
                title: Text('My Orders'),
                leading: Icon(Icons.shopping_basket, color: Colors.blue,),
              ),
            ),

            InkWell(
              onTap: (){},
              child: ListTile(
                title: Text('Categoris'),
                leading: Icon(Icons.dashboard, color: Colors.blue,),
              ),
            ),
            InkWell(
              onTap: (){},
              child: ListTile(
                title: Text('Favourites'),
                leading: Icon(Icons.favorite, color: Colors.blue,),
              ),
            ),

            Divider(),

            InkWell(
              onTap: (){},
              child: ListTile(
                title: Text('Settings'),
                leading: Icon(Icons.settings,),
              ),
            ),

            InkWell(
              onTap: (){},
              child: ListTile(
                title: Text('About'),
                leading: Icon(Icons.help, ),
              ),
            ),

          ],
        ),
      ),

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
                  return FoodDetail();
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
              return FoodForm(
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
