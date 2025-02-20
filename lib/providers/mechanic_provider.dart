// lib/providers/mechanic_provider.dart
import 'package:flutter/material.dart';
import '../models/mechanic_model.dart';
import '../services/database_service.dart';

class MechanicProvider with ChangeNotifier {
  final DatabaseService _dbService = DatabaseService();
  List<MechanicModel> _mechanics = [];

  List<MechanicModel> get mechanics => _mechanics;

  Future<void> fetchMechanics() async {
    // Replace with an actual Firestore query.
    _mechanics = [
      MechanicModel(id: '1', name: 'John Doe', location: 'Downtown'),
      MechanicModel(id: '2', name: 'Jane Smith', location: 'Uptown'),
    ];
    notifyListeners();
  }
}
