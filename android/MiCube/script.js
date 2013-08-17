/*
*	New project by ....... 
*
*/

var dataLabel = ui.label("data : ",10, 20,500,100);


ui.button("START", 50,150,500,100, function(){ 
    makr.start(function(data) {
    	ui.labelSetText(dataLabel, "Data : " + data);
	});
});

android.toast("hello world!", 2000);
//media.playSound("Piano_A_68437_pinkyfinger_piano_a.ogg");
//media.playSound("Piano_B_68438_pinkyfinger_piano_b.ogg");
//media.playSound("Piano_C_68441_pinkyfinger_piano_c.ogg");
//media.playSound("Piano_D_68442_pinkyfinger_piano_d.ogg");
//media.playSound("Piano_F_68446_pinkyfinger_piano_f.ogg");
//media.playSound("Piano_G_68448_pinkyfinger_piano_g.ogg");
