import { View, Text, ImageBackground, ScrollView, Pressable, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const testimonials = [
  {
    text: "Journio helped me discover hidden gems I would have never found otherwise!",
    author: "Sarah M."
  },
  {
    text: "The local insights feature completely changed how I plan my trips.",
    author: "James K."
  },
  {
    text: "Finally, an app that combines planning with authentic local knowledge.",
    author: "Maria L."
  }
];

export default function Landing() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/(auth)/signIn');
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar style="light" />
      <ScrollView style={styles.scrollView}>
        <ImageBackground
          source={{ uri: 'https://picsum.photos/id/1015/1200/800' }}  // Mountain lake view
          style={styles.heroImage}
          resizeMode="cover"
        >
          <View style={styles.overlay}>
            <Text style={styles.title}>Journio</Text>
            <Text style={styles.subtitle}>
              Plan your perfect trip with local insights
            </Text>
          </View>
        </ImageBackground>

        <View style={styles.content}>
          <Text style={styles.sectionTitle}>What Travelers Say</Text>

          <View style={styles.testimonialContainer}>
            {testimonials.map((testimonial, index) => (
              <View key={index} style={styles.testimonialCard}>
                <Text style={styles.testimonialText}>"{testimonial.text}"</Text>
                <Text style={styles.testimonialAuthor}>- {testimonial.author}</Text>
              </View>
            ))}
          </View>

          <View style={styles.ctaContainer}>
            <Pressable style={styles.button} onPress={handleGetStarted}>
              <Text style={styles.buttonText}>Get Started</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollView: {
    flex: 1,
  },
  heroImage: {
    width: width,
    height: height * 0.5,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    maxWidth: '80%',
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  testimonialContainer: {
    gap: 20,
    marginBottom: 30,
  },
  testimonialCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  testimonialText: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    fontStyle: 'italic',
  },
  testimonialAuthor: {
    color: '#A0A0A0',
    fontSize: 14,
  },
  ctaContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});