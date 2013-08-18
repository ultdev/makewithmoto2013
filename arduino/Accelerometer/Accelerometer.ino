      
const int xpin = A0;         
const int ypin = A1;             
const int zpin = A2;

int x,y,z,last_x,last_y,last_z;

// const float threshold = 120;
const float threshold_x = 180;
const float threshold_y = 180;
const float threshold_z = 180;

void setup()
{
  
  Serial.begin(9600);
  
  // Provide ground and power by using the analog inputs as normal
  // digital pins.  This makes it possible to directly connect the
  // breakout board to the Arduino.  If you use the normal 5V and
  // GND pins on the Arduino, you can remove these lines.
  

}

void loop()
{

  x = analogRead(xpin);
  y = analogRead(ypin);
  z = analogRead(zpin);


//  float speed = (x - last_x + y - last_y + z - last_z);

  float speed_x = (x-last_x);
  float speed_y = (y-last_y);
  float speed_z = (z-last_z);

/* 
  Serial.print("Speed: ");
  Serial.print(speed);
  Serial.print("\t");
  Serial.print(x);
  Serial.print("\t");
  Serial.print(y);
  Serial.print("\t");
  Serial.println(z);

 
 if (speed > threshold) {
   Serial.print("A");
 } else if (speed < -threshold) {
   Serial.print("A'");
 } else {
   Serial.print("0");
 }
   delay(50);
*/
   
 if (speed_x > threshold_x) {
   Serial.print("1");
 } else if (speed_x < -threshold_x) {
   Serial.print("2");
 } else {
   Serial.print("3");
 }
  delay(50);
 
 if (speed_y > threshold_y) {
   Serial.print("1");
 } else if (speed_y < -threshold_y) {
   Serial.print("2");
 } else {
   Serial.print("3");
 } 
   delay(50);
   
 if (speed_z > threshold_z) {
   Serial.println("1");
 } else if (speed_z < -threshold_z) {
   Serial.println("2");
 } else {
   Serial.println("3");
 }
   delay(50);

  last_x=x;
  last_y=y;
  last_z=z;


}
