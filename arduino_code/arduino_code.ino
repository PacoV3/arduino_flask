const int analog_pin_1 = A0;
int pot_val;
float voltage_val;
unsigned long last_time = 0, sample_time = 1000;

void setup() {
  Serial.begin(9600);
}

void loop() {
  if (millis() - last_time > sample_time) {
    pot_val = analogRead(analog_pin_1);
    voltage_val = f_map(pot_val, 0, 1023, 0, 5);
    Serial.println(voltage_val);
  }
}

float f_map(long x, long in_min, long in_max, long out_min, long out_max)
{
  return (float)(x - in_min) * (out_max - out_min) / (float)(in_max - in_min) + out_min;
}
