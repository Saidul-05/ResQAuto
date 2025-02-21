// lib/widgets/mechanic_card.dart
import 'package:flutter/material.dart';
import '../models/mechanic_model.dart';

class MechanicCard extends StatelessWidget {
  final MechanicModel mechanic;
  
  const MechanicCard({Key? key, required this.mechanic}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListTile(
        title: Text(mechanic.name),
        subtitle: Text(mechanic.location),
      ),
    );
  }
}
