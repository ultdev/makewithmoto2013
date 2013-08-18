/*
*    New project by ....... 
*
*/

var dataLabel = ui.label("data : ",10, 20,500,100);
var selectedInstrument = 0;

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


makr.start(function(data) {
    ui.labelSetText(dataLabel, "Data : " + data);

    if (selectedInstrument == 1) {
        switch(parseInt(data)){
            case 1:
                media.playSound("Piano_C_68441_pinkyfinger_piano_c.ogg");
                break;
            case 2:
                media.playSound("Piano_D_68442_pinkyfinger_piano_d.ogg");
                break;
            case 3:
                media.playSound("Piano_F_68446_pinkyfinger_piano_f.ogg");
                break;
            case 4:
                media.playSound("Piano_G_68448_pinkyfinger_piano_g.ogg");
                break;
            case 5:
                media.playSound("Piano_A_68437_pinkyfinger_piano_a.ogg");
                break;
            case 6:
                media.playSound("Piano_B_68438_pinkyfinger_piano_b.ogg");
                break;
        }
    } else if (selectedInstrument == 2) {
        switch(parseInt(data)){
            case 1:
                media.playSound("Drum_Floor_Tom_41438_sandyrb_srbm_tom_002.ogg");
                break;
            case 2:
                media.playSound("Drum_Hi_Hat_43373_freakrush_hihat3.ogg");
                break;
            case 3:
                media.playSound("Drum_Kick_Drum_Hard_191292_nabz871_kick_drum_hard_.ogg");
                break;
            case 4:
                media.playSound("Drum_Open_Hi_Hat_104226_minorr_hhat_paiste_302_14_.ogg");
                break;
            case 5:
                media.playSound("Drum_Snare_82733_sandyrb_12x8_snare_m201_03.ogg");
                break;
            case 6:
                media.playSound("Drum_Tom_129843_quartertone_tt12x8_hp_rs_v01.ogg");
                break;
        }    
    } else if (selectedInstrument == 3) {
        switch(parseInt(data)){
            case 1:
                media.playSound("Guitar_Chord_Am_26379_staile_am.ogg");
                break;
            case 2:
                media.playSound("Guitar_Chord_C_26380_staile_c.ogg");
                break;
            case 3:
                media.playSound("Guitar_Chord_D_26381_staile_d.ogg");
                break;
            case 4:
                media.playSound("Guitar_Chord_D7_26382_staile_d7.ogg");
                break;
            case 5:
                media.playSound("Guitar_Chord_Em_26383_staile_em.ogg");
                break;
            case 6:
                media.playSound("Guitar_Chord_G_26384_staile_g.ogg");
                break;
        }
    } else if (selectedInstrument == 4) {
        switch(parseInt(data)){
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
    
    if(parseInt(data) > 100){
        // X
        switch(parseInt(data) / 100){
            case 1: // pos
                media.playSound("Drum_Floor_Tom_41438_sandyrb_srbm_tom_002.ogg");
                break;
            case 2: // neg
                media.playSound("Drum_Hi_Hat_43373_freakrush_hihat3.ogg");
                break;
            case 3: //zero
                break;
        }
        // Y
        switch((parseInt(data) % 100) / 10){
            case 1:
                media.playSound("Drum_Kick_Drum_Hard_191292_nabz871_kick_drum_hard_.ogg");
                break;
            case 2:
                media.playSound("Drum_Open_Hi_Hat_104226_minorr_hhat_paiste_302_14_.ogg");
                break;
            case 3:
                break;
        }
        // Z
        switch(parseInt(data) % 10){
            case 1:
                media.playSound("Drum_Snare_82733_sandyrb_12x8_snare_m201_03.ogg");
                break;
            case 2:
                media.playSound("Drum_Tom_129843_quartertone_tt12x8_hp_rs_v01.ogg");
                break;
            case 3:
                break;
        }
    }

});

android.toast("Welcome to MiMusic!", 2000);

