"use client";
import React, { useState, useEffect, useRef } from "react";
import { Mic, MicOff } from "lucide-react";
import { db } from "@/config/firebase.config"; 
import { collection, addDoc, query, where, onSnapshot } from "firebase/firestore";

const VoiceRecorderApp = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcription, setTranscription] = useState("");
  const [name, setName] = useState("");
  const [testimonials, setTestimonials] = useState([]); // Stores approved testimonials
  const recognitionRef = useRef(null);

  // Fetch real-time approved testimonials from Firestore
  useEffect(() => {
    const q = query(
      collection(db, "testimonials"),
      where("approved", "==", true) // Fetch only approved testimonials
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const testimonialsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTestimonials(testimonialsData);
    });

    return () => unsubscribe(); // Cleanup listener on component unmount
  }, []);

  const startRecording = () => {
    if (!name.trim()) {
      alert("Please enter your name before starting the recording.");
      return;
    }
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      alert("Your browser does not support speech recognition.");
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;

    recognition.lang = "en-US";
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      let interimTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcriptSegment = event.results[i];
        if (transcriptSegment.isFinal) {
          setTranscription((prev) => prev + transcriptSegment[0].transcript);
        } else {
          interimTranscript += transcriptSegment[0].transcript;
          console.log(interimTranscript);
        }
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    recognition.onend = () => {
      console.log("Speech recognition ended.");
    };

    recognition.start();
    setIsRecording(true);
  };

  const stopRecording = async () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsRecording(false);

    // Add transcription to Firestore
    if (transcription) {
      try {
        await addDoc(collection(db, "testimonials"), {
          testimonial: transcription,
          name: name.trim(),
          approved: false, // Default to not approved
        });
        console.log("Document added to Firestore. Waiting for admin approval.");
        alert("your testimonial will be visible once the Admin approves it!")
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    setTranscription(""); // Clear the transcription after submission
   
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 className="text-3xl">Testimonials</h1>
      <p className="mt-3 text-gray-500">Any feedbacks about my profile?</p>
      <hr className="mt-2" />
       <div className="mt-4">
        
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
        />
      </div>

      {/* Centered Button */}
      <div className="flex justify-center my-8">
        <button
          onClick={isRecording ? stopRecording : startRecording}
          className={`w-16 h-16 rounded-full flex items-center justify-center transition duration-300 ease-in-out shadow-lg ${
            isRecording
              ? "bg-red-500 animate-pulse"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {isRecording ? (
            <MicOff className="text-white w-6 h-6" />
          ) : (
            <Mic className="text-white w-6 h-6" />
          )}
        </button>
      </div>

      {/* Display Real-Time Transcription */}
      <div style={{ marginTop: "20px" }}>
        {isRecording && (
          <div>
            <h3>Transcribing in Real-Time:</h3>
            <p
              style={{
                padding: "10px",
                backgroundColor: "#f9f9f9",
                border: "1px solid #ddd",
                borderRadius: "5px",
                color: "black",
              }}
            >
              {transcription || "Listening..."}
            </p>
          </div>
        )}
      </div>

      {/* Display Approved Testimonials from Firestore */}
      <div style={{ marginTop: "30px" }}>
        <h2>Approved Testimonials:</h2>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              padding: "10px",
              backgroundColor: "black",
              color: "white",
              borderRadius: "5px",
            }}
          >
            <p>{ testimonial.name}</p>
            <p>{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoiceRecorderApp;
