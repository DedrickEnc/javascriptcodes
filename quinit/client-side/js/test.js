test(' Resulats du test ', function() { 

    ok(estPair(0), '0 est un nombre pair'); 
    ok(estPair(2), '2 est un nombre pair'); 
    ok(estPair(-4), '-4 est un nombre pair'); 
    ok(!estPair(1), '1 n\'est pas un nombre pair'); 
    ok(!estPair(-7), '-7 n\'est pas un nombre pair');
    ok(estPair(-7), '-7 n\'est pas un nombre pair');  
    equal(sommer(1,1), 3, ' septieme test');
    deepEqual(convert('papa', 'maman'), {un:'papa', deux:'maman'}, "Test donnee complexes");
}) 


