#define DEBOUNCE 10  // button debouncer, how many ms to debounce, 5+ ms is usually plenty

const int led = 13;

String inputString = "";         // a string to hold incoming data
boolean stringComplete = false;  // whether the string is complete

// here is where we define the buttons that we'll use. button "1" is the first, button "6" is the 6th, etc
byte buttons[] = {22, 23, 24, 25, 26, 27}; // the analog 0-5 pins are also known as 14-19
// This handy macro lets us determine how big the array up above is, by checking the size
#define NUMBUTTONS sizeof(buttons)

#define BUTTON1 0x01
#define BUTTON2 0x02
#define BUTTON3 0x04
#define BUTTON4 0x08
#define BUTTON5 0x10
#define BUTTON6 0x20

// we will track if a button is just pressed, just released, or 'currently pressed' 
volatile byte pressed[NUMBUTTONS], justpressed[NUMBUTTONS], justreleased[NUMBUTTONS];
volatile byte buttons_changed, buttons_new, buttons_state;

const int xpin = A0;         
const int ypin = A1;             
const int zpin = A2;

int x,y,z,last_x,last_y,last_z;

// const float threshold = 120;
const float threshold_x = 180;
const float threshold_y = 180;
const float threshold_z = 180;

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
}


void check_switches()
{
  buttons_new = 0;
  buttons_changed = 0;
  
  for (i=0; i< NUMBUTTONS; i++) {
    if(digitalRead(buttons[i]) == 0){
      buttons_new |= (1 << i);
    }
  }
  
  buttons_changed = buttons_state ^ buttons_new;
  buttons_state = buttons_new;

//  Serial.println(buttons_new);
//  delay(100);
  
}


void loop() {
  check_switches();
  if(buttons_changed != 0){
    for (i=0; i < NUMBUTTONS; i++){
      if((bitRead(buttons_changed,i) == 1) && (bitRead(buttons_state,i) == 1)){
          Serial.println(i+1);
          delay(100);
      }
    }    
  } 
  x = analogRead(xpin);
  y = analogRead(ypin);
  z = analogRead(zpin); 
  
  float speed_x = (x-last_x);
  float speed_y = (y-last_y);
  float speed_z = (z-last_z);
  
 if (speed_x > threshold_x) {
   Serial.print("1");
 } else if (speed_x < -threshold_x) {
   Serial.print("2");
 } else {
//   Serial.print("3");
 }
  delay(50);
 
 if (speed_y > threshold_y) {
   Serial.print("1");
 } else if (speed_y < -threshold_y) {
   Serial.print("2");
 } else {
//   Serial.print("3");
 } 
   delay(50);
   
 if (speed_z > threshold_z) {
   Serial.println("1");
 } else if (speed_z < -threshold_z) {
   Serial.println("2");
 } else {
//   Serial.println("3");
 }
   delay(50);

  last_x=x;
  last_y=y;
  last_z=z;

  delay(100);
}
