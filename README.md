# Portofolio

import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    home: Home(),
  debugShowCheckedModeBanner: false, ));
}

class Home extends StatelessWidget {
  // const Home({super.key});

  @override
  Widget build(BuildContext context) {
    return  Scaffold(
      body: Container(
        decoration: const BoxDecoration(
          image: DecorationImage(
            image: AssetImage("images/wall.jpg"),
            fit: BoxFit.cover,
          ),
        ),
        child: const Padding(
          padding: EdgeInsets.only(top: 100.0, left: 50),
          child: Column(
            children: <Widget>[
              Row(
                children: <Widget>[
                  CircleAvatar(
                    radius: 40, backgroundImage: AssetImage("images/nachii.jpg"),
                  ),

                  SizedBox(
                    width: 50,
                  ),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      Text(
                        "Nachiket Thombare",
                        style: TextStyle(fontSize: 30.0,color: Colors.white,fontFamily: "Code"),
                      ),
                      Text(
                        "Designation",
                        style: TextStyle(fontSize: 15.0,color: Colors.white),
                      )
                    ],
                  )
                ],
              ),
              SizedBox(
                height: 30,
              ),
              Padding(
                padding: EdgeInsets.only(left: 30.0),
                child: Column(
                  children: <Widget>[
                    Row(
                      children: <Widget>[
                        Icon(
                          Icons.school,
                          size: 40,
                          color: Colors.white,
                        ),
                        SizedBox(
                          width: 25,
                        ),
                        Text(
                          "School Name",
                          style: TextStyle(fontSize: 20.0,color: Colors.white),
                        ),
                      ],
                    ),
                    SizedBox(height: 10,),
                    Row(
                      children: <Widget>[
                        Icon(
                          Icons.computer_rounded,
                          size: 40,
                          color: Colors.white,
                        ),
                        SizedBox(
                          width: 25,
                        ),
                        Text(
                          "School Name",
                          style: TextStyle(fontSize: 20.0,color: Colors.white),
                        )
                      ],
                    ),
                    SizedBox(height: 10,),
                    Row(
                      children: <Widget>[
                        Icon(
                          Icons.location_pin,
                          size: 40,
                          color: Colors.white,
                        ),
                        SizedBox(
                          width: 25,
                        ),
                        Text(
                          "School Name",
                          style: TextStyle(fontSize: 20.0,color: Colors.white),
                        )
                      ],
                    ),
                    SizedBox(height: 10,),
                    Row(
                      children: <Widget>[
                        Icon(
                          Icons.email,
                          size: 40,
                          color: Colors.white,
                        ),
                        SizedBox(
                          width: 25,
                        ),
                        Text(
                          "School Name",
                          style: TextStyle(fontSize: 20.0,color: Colors.white),
                        )
                      ],
                    ),
                    SizedBox(height: 10,),
                    Row(
                      children: <Widget>[
                        Icon(
                          Icons.phone,
                          size: 40,
                          color: Colors.white,
                        ),
                        SizedBox(
                          width: 25,
                        ),
                        Text(
                          "School Name",
                          style: TextStyle(fontSize: 20.0,color: Colors.white),
                        )
                      ],
                    ),
                  ],
                ),
              ),
              SizedBox(height: 50,),
              Padding(
                padding: EdgeInsets.all(10.0),
                child: Text("About me Throughout my career, I've had the privilege of working on projects such as [mention a relevant project or achievement] which [highlight a positive outcome or impact]. I'm particularly passionate about [mention a specific aspect of the role or industry you're applying for],",style: TextStyle(fontSize: 20,color: Colors.white),),
              ),
              SizedBox(height: 20,),
              Text("Created By Nachiket",style: TextStyle(color: Colors.white),)
            ],
          ),
        ),
      ),
    );
  }
}
# Rundheer
