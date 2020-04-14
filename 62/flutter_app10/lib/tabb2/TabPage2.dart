import 'package:flutter/material.dart';
import 'lythuyetmodel.dart';
import 'lythuyet_helper.dart';
import 'thuchanh_helper.dart';
import 'thuchanh_model.dart';


class TabPage2 extends StatefulWidget {
  @override
  _MyHomePageState createState() => new _MyHomePageState();
}

class _MyHomePageState extends State<TabPage2>
    with SingleTickerProviderStateMixin {
  Color whatsAppGreen = Colors.lightBlue;
  Color whatsAppGreenLight = Colors.lightBlue;

  TabController tabController;
  var fabIcon = Icons.message;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();

    tabController = TabController(vsync: this, length: 2)
      ..addListener(() {
        setState(() {
          switch (tabController.index) {
            case 0:
              break;
            case 1:
              fabIcon = Icons.message;
              break;
            case 2:
              fabIcon = Icons.camera_enhance;
              break;
            case 3:
              fabIcon = Icons.call;
              break;
          }
        });
      });
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text(
          "Mẹo thi",
          style: TextStyle(
              color: Colors.white, fontSize: 22.0, fontWeight: FontWeight.w600),
        ),

        backgroundColor: whatsAppGreen,
        bottom: TabBar(
          tabs: [
            Tab(
              child: Text("Mẹo thi lý thuyết"),
            ),
            Tab(
              child: Text("Mẹo thi thực hành"),
            ),


          ],
          indicatorColor: Colors.white,
          controller: tabController,
        ),
      ),
      body: TabBarView(
        controller: tabController,
        children: [

          ListView.builder(
            itemBuilder: (context, position) {
              ChatItemModel chatItem = ChatHelper.getChatItem(position);

              return Column(
                children: <Widget>[
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Row(
                      children: <Widget>[

                        Expanded(
                          child: Padding(
                            padding: const EdgeInsets.all(8.0),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: <Widget>[
                                Row(
                                  mainAxisAlignment:
                                  MainAxisAlignment.spaceBetween,
                                  children: <Widget>[
                                    Text(
                                      chatItem.name,
                                      style: TextStyle(

                                          fontWeight: FontWeight.bold,
                                          fontSize: 18.0),
                                    ),
//                                    Text(
//                                      chatItem.messageDate,
//                                      style: TextStyle(color: Colors.black45),
//                                    ),
                                  ],
                                ),
                                Padding(
                                  padding: const EdgeInsets.only(top: 2.0),
                                  child: Text(
                                    chatItem.mostRecentMessage,
                                    style: TextStyle(
                                        color: Colors.black45, fontSize: 15.0),
                                  ),
                                )
                              ],
                            ),
                          ),
                        )
                      ],
                    ),
                  ),
                  Divider(),
                ],
              );
            },
            itemCount: ChatHelper.itemCount,
          ),

          ListView.builder(
            itemBuilder: (context, position) {
              StatusItemModel statusItemModel = StatusHelper.getStatusItem(position);

              return Column(
                children: <Widget>[
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Row(
                      children: <Widget>[

                        Expanded(
                          child: Padding(
                            padding: const EdgeInsets.all(8.0),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: <Widget>[
                                Row(
                                  mainAxisAlignment:
                                  MainAxisAlignment.spaceBetween,
                                  children: <Widget>[
                                    Text(
                                      statusItemModel.name,
                                      style: TextStyle(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 16.0),
                                    ),
                                  ],
                                ),
                                Padding(
                                  padding: const EdgeInsets.only(top: 2.0),
                                  child: Text(
                                    statusItemModel.dateTime,
                                    style: TextStyle(
                                        color: Colors.black45, fontSize: 14.0),
                                  ),
                                )
                              ],
                            ),
                          ),
                        )
                      ],
                    ),
                  ),
                  Divider(),
                ],
              );
            },
            itemCount: StatusHelper.itemCount,
          ),

        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: Icon(fabIcon),
        backgroundColor: Colors.lightBlue,
      ),
    );
  }
}