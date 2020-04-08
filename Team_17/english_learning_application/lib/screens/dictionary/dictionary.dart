import 'package:flutter/material.dart';
import 'package:html/parser.dart';
// import 'dart:async';
import 'package:englishlearningapplication/services/word_search.dart';

class Dictionary extends StatefulWidget {
  @override
  _DictionaryState createState() => _DictionaryState();
}

class _DictionaryState extends State<Dictionary> {

  List result = [];
  TextEditingController _controller = TextEditingController();
  // Timer _debounce;
  bool isLoading = false;
  String _notFound = 'This word is not found';

  void update() async {
    result = [];
    setState(() {
      isLoading = true;
    });
    WordSearch instance = WordSearch(word: _controller.text, lang: 'en');
    await instance.getTranslate();
    for(int i = 0; i < instance.values.length; i++) {
      setState(() {
        result.add(instance.values[i]['fields']);
      });
    }
    setState(() {
      isLoading = false;
    });
  }

  String removeTagHTML(String htmlString) {
    var document = parse(htmlString);
    String parsedString = parse(document.body.text).documentElement.text;
    return parsedString;
  }

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
                    onChanged: (String text) {
                      // if (_debounce?.isActive ?? false) _debounce.cancel();
                      //   _debounce = Timer(const Duration(milliseconds: 1000), () {
                      //     update();
                      // });
                    },
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
                onPressed: () {
                  update();
                },
                icon: Icon(
                  Icons.search,
                  color: Colors.white,
                ),
              ),
            ],
          ),
        ),
      ),
      body: buildBody(),
    );
  }

  Widget buildBody() {
    if(isLoading) {
      return Center(child: CircularProgressIndicator());
    }
    else {
      return result.isEmpty ? Center(child: Text(_notFound)) : ListView.builder(
        itemCount: result.length,
        itemBuilder: (context, index) {
          return Card(
            child: ListTile(
              title: Text(removeTagHTML('${result[index]['en']}')),
              subtitle: Text('${result[index]['vi']}'),
            ),
          );
        },
      );
    }
  }
}
