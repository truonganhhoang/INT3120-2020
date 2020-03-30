import 'package:flutter/material.dart';

class Dictionary extends StatefulWidget {
  @override
  _DictionaryState createState() => _DictionaryState();
}

class _DictionaryState extends State<Dictionary> {

  TextEditingController _controller = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Từ điển Anh - Việt'),
        backgroundColor: Colors.green[700],
        elevation: 0,
        bottom: PreferredSize(
          preferredSize: Size.fromHeight(48.0),
          child: Row(
            children: <Widget>[
              Expanded(
                child: Container(
                  margin: EdgeInsets.only(left: 12.0, bottom: 8.0),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadiusDirectional.circular(24.0),
                  ),
                  child: TextFormField(
                    onChanged: (String text) {},
                    controller: _controller,
                    autofocus: true,
                    style: TextStyle(color: Colors.grey[600]),
                    decoration: InputDecoration(
                      hintText: 'Enter for a word',
                      hintStyle: TextStyle(color: Colors.grey[600]),
                      contentPadding: EdgeInsets.only(left: 24.0),
                      border: InputBorder.none,
                    ),
                  ),
                ),
              ),
              IconButton(
                onPressed: () {},
                icon: Icon(
                  Icons.search,
                  color: Colors.white,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
