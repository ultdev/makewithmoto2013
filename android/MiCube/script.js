/*
*    New project by ....... 
*
*/

var dataLabel = ui.label("data : ",10, 20,500,100);
var selectedInstrument = 0;

makr.start(function(data) {
    ui.labelSetText(dataLabel, "Data : " + data);

ui.button("PIANO", 50,150,500,100, function(){ 
    selectedInstrument = 1;
});

ui.button("DRUM", 50,300,500,100, function(){
    selectedInstrument = 2;
});

ui.button("GUITAR", 50, 450, 500, 100, function(){
    selectedInstrument = 3;
});

ui.button("FA", 50,600,500,100, function(){
    selectedInstrument = 4;
});

    if (selectedInstrument == 1) {
        switch(data){
                case 1:
                    media.playSound("Piano_C_68437_pinkyfinger_piano_c.ogg");
                    break;
                case 2:
                    media.playSound("Piano_D_68437_pinkyfinger_piano_d.ogg");
                    break;
                case 3:
                    media.playSound("Piano_E_68437_pinkyfinger_piano_e.ogg");
                    break;
                case 4:
                    media.playSound("Piano_F_68437_pinkyfinger_piano_f.ogg");
                    break;
                case 5:
                    media.playSound("Piano_G_68437_pinkyfinger_piano_g.ogg");
                    break;
                case 6:
                    media.playSound("Piano_A_68437_pinkyfinger_piano_a.ogg");
                    break;
            }
    } else if (selectedInstrument == 2) {
            switch(data){
                case 1:
                    media.playSound("Drum_Floor Tom_41438__sandyrb__srbm-tom-002.ogg");
                    break;
                case 2:
                    media.playSound("Drum_Hi Hat_43373__freakrush__hihat3.ogg");
                    break;
                case 3:
                    media.playSound("Drum_Kick Drum Hard_191292__nabz871__kick-drum-hard-2.ogg");
                    break;
                case 4:
                    media.playSound("Drum_Open Hi Hat_104226__minorr__hhat-paiste-302-14-open-f.ogg");
                    break;
                case 5:
                    media.playSound("Drum_Snare_82733__sandyrb__12x8-snare-m201-03.ogg");
                    break;
                case 6:
                    media.playSound("Piano_A_68437_pinkyfinger_piano_a.ogg");
                    break;
            }    
    } else if (selectedInstrument == 3) {
                        switch(data){
                case 1:
                    media.playSound("Guitar Chord_Am_26379__staile__am.ogg");
                    break;
                case 2:
                    media.playSound("Guitar Chord_C_26380__staile__c.ogg");
                    break;
                case 3:
                    media.playSound("Guitar Chord_D_26381__staile__d.ogg");
                    break;
                case 4:
                    media.playSound("Guitar Chord_D7_26382__staile__d7.ogg");
                    break;
                case 5:
                    media.playSound("Guitar Chord_Em_26383__staile__em.ogg");
                    break;
                case 6:
                    media.playSound("Guitar Chord_G_26384__staile__g.ogg");
                    break;
            }
    } else if (selectedInstrument ==4) {
                    switch(data){
                case 1:
                    media.playSound("Cow_animals084.ogg");
                    break;
                case 2:
                    media.playSound("Crow_animals010.ogg");
                    break;
                case 3:
                    media.playSound("Dog_bark_animals079.ogg");
                    break;
                case 4:
                    media.playSound("Duck_quacking_animals039.ogg");
                    break;
                case 5:
                    media.playSound("Rooster_animals070.ogg");
                    break;
                case 6:
                    media.playSound("Sheep_animals058.ogg");
                    break;
            }
    }

});

android.toast("Welcome to MiMusic!", 2000);

