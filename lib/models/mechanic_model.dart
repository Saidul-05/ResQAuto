// lib/models/mechanic_model.dart
class MechanicModel {
  final String id;
  final String name;
  final String location;

  MechanicModel({required this.id, required this.name, required this.location});

  factory MechanicModel.fromMap(Map<String, dynamic> data, String id) {
    return MechanicModel(
      id: id,
      name: data['name'] ?? '',
      location: data['location'] ?? '',
    );
  }

  Map<String, dynamic> toMap() {
    return {
      'name': name,
      'location': location,
    };
  }
}
