import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.text}>Tugas Praktikum Pert.2</Text>
      <Text style={styles.text}>Muflif Fadhlurrochman</Text>
      
      {/* Kontainer untuk kotak */}
      <View style={styles.boxContainer}>
        {/* Kotak 1 */}
        <View style={styles.boxRed} />
        {/* Kotak 2 */}
        <View style={styles.boxGreen} />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3', // Warna abu-abu terang
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24, // Ukuran font 24
    color: 'blue', // Warna biru
    fontWeight: 'bold', // Teks tebal
    marginBottom: 20, // Spasi di bawah teks
  },
  boxContainer: {
    flexDirection: 'row', // Tata letak horizontal
    justifyContent: 'space-between', // Jarak merata antara kotak
    alignItems: 'center',
    width: '60%', // Lebar area untuk kotak
  },
  boxRed: {
    width: 100,
    height: 100,
    backgroundColor: 'red', // Warna merah berani
  },
  boxGreen: {
    width: 100,
    height: 100,
    backgroundColor: 'lightgreen', // Warna hijau penakut
  },
});
