#define DEBOUNCE 10  // button debouncer, how many ms to debounce, 5+ ms is usually plenty

const int led = 13;

String inputString = "";         // a string to hold incoming data
boolean stringComplete = false;  // whether the string is complete

// here is where we define the buttons that we'll use. button "1" is the first, button "6" is the 6th, etc
byte buttons[] = {22, 23, 24, 25, 26, 27}; // the analog 0-5 pins are also known as 14-19
// This handy macro lets us determine how big the array up above is, by checking the size
#define NUMBUTTONS sizeof(buttons)
// we will track if a button is just pressed, just released, or 'currently pressed' 
volatile byte pressed[NUMBUTTONS], justpressed[NUMBUTTONS], justreleased[NUMBUTTONS];

byte i;
void setup() {  
  // set up serial port
  Serial.begin(9600);

  // pin13 LED
  pinMode(13, OUTPUT);
 
  // Make input & enable pull-up resistors on switch pins
  for (i=0; i< NUMBUTTONS; i++) {
    pinMode(buttons[i], INPUT);
    digitalWrite(buttons[i], HIGH);
  }


void check_switches()
{
  for (i=0; i< NUMBUTTONS; i++) {
    pressed[i] = digitalRead(buttons[i]);
  }
  
  if((pressed[0] == 0)){
    Serial.println("Button 1 Pressed")  
  }
  else{
    Serial.println("Button 1 Released")
  }
  if((pressed[1] == 0)){
    Serial.println("Button 2 Pressed")
  }
  else{
    Serial.println("Button 2 Released")
  }
  if((pressed[2] == 0)){
    Serial.println("Button 3 Pressed")
  }
  else{
    Serial.println("Button 3 Released")
  }
  if((pressed[3] == 0)){
    Serial.println("Button 4 Pressed")
  }
  else{
    Serial.println("Button 4 Released")
  }
  if((pressed[4] == 0)){
    Serial.println("Button 5 Pressed")
  }
  else{
    Serial.println("Button 5 Released")
  }
  if((pressed[5] == 0)){
    Serial.println("Button 6 Pressed")
  }
  else{
    Serial.println("Button 6 Released")
  }
}


void loop() {
  check_switches();  
}
