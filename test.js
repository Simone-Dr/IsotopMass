atom = ["C", "H", "O", "S", "Br", "Cl", "I", "N", "Si", "Se", "B" , "P"];
IsotopMass = [12.000000, 1.007825, 15.994915, 31.972071, 78.918338, 34.968853, 126.904468, 14.003074, 27.976927, 79.916522, 11.009305, 30.973762];
var SolSave = [];
var Solutions = [];

var Range = 0.003; 
const NumberOfAtoms = 12; 
var HowManyOfOneType = 20; 
var FirstAtomNumber = 12; 
var ForSetAtom = 0; 


function SetFirstAtom(atomNr){
	let tempAtom = atom[atomNr];
	let tempMass = IsotopMass[atomNr];
	atom[atomNr] = atom[0];
	IsotopMass[atomNr] = IsotopMass[0];
	atom[0] = tempAtom;
	IsotopMass[0] = tempMass;

	FirstAtomNumber = 1; 
	console.log(atom);
}


function ChangeRange(inp){
	Range = inp; 
}

function solve(Mass){
	let SolMass;
	let i = 0; 
	let SolCount = 0; 

	for (let FirstAtom = 0; FirstAtom < FirstAtomNumber; FirstAtom++) { 

		for(let CountOne = 1; CountOne < HowManyOfOneType; CountOne++) {

			SolMass = ((CountOne * IsotopMass[FirstAtom]) - 0.00054);

			if (SolMass >= (Mass + Range)) { break; }

			if ((SolMass >= (Mass - Range)) && (SolMass <= (Mass + Range))) {
			 
				let temp = [atom[FirstAtom], CountOne, " Masse: " ,SolMass.toFixed(5)];
				Solutions[SolCount] = temp; 
				SolCount++;

			}								 
		}
	}

	for (let FirstAtom = 0; FirstAtom < FirstAtomNumber; FirstAtom++) { 

		for(let SecondAtom = 0; SecondAtom < NumberOfAtoms; SecondAtom++) {	

			if (SecondAtom > FirstAtom) {

				for(let CountOne = 1; CountOne < HowManyOfOneType; CountOne++) {

					for(let CountTwo = 1; CountTwo < HowManyOfOneType; CountTwo++) {

						SolMass = ((CountOne * IsotopMass[FirstAtom]) + (CountTwo * IsotopMass[SecondAtom]) - 0.00054);

						if (SolMass >= (Mass + Range)) { break; }


						if ((SolMass >= (Mass - Range)) && (SolMass <= (Mass + Range))) {
						 
							let temp = [atom[FirstAtom], CountOne, atom[SecondAtom], CountTwo,  " Masse: " ,SolMass.toFixed(5)];
							Solutions[SolCount] = temp; 
							SolCount++;

						}							
					} 
				}
			}
		}
	}

	for (let FirstAtom = 0; FirstAtom < FirstAtomNumber; FirstAtom++) { 

		for(let SecondAtom = 0; SecondAtom < NumberOfAtoms; SecondAtom++) {	

			if (SecondAtom > FirstAtom) {

				for(let ThirdAtom = 0; ThirdAtom < NumberOfAtoms; ThirdAtom++) {

					if (ThirdAtom > SecondAtom){

						for(let CountOne = 1; CountOne < HowManyOfOneType; CountOne++) {

							for(let CountTwo = 1; CountTwo < HowManyOfOneType; CountTwo++) {

								for(let CountThree = 1; CountThree < HowManyOfOneType; CountThree++) {

									SolMass = ((CountOne * IsotopMass[FirstAtom]) + (CountTwo * IsotopMass[SecondAtom]) + (CountThree * IsotopMass[ThirdAtom]) - 0.00054);

									if (SolMass >= (Mass + Range)) { break; }


									if ((SolMass >= (Mass - Range)) && (SolMass <= (Mass + Range))) {
									 
										let temp = [atom[FirstAtom], CountOne, atom[SecondAtom], CountTwo, atom[ThirdAtom], CountThree,  " Masse: " ,SolMass.toFixed(5)];
										Solutions[SolCount] = temp; 
										SolCount++;

									}							
								}
							} 
						}										
					}
				}
			}
		}
	}


	for (let FirstAtom = 0; FirstAtom < FirstAtomNumber; FirstAtom++) { 

		for(let SecondAtom = 0; SecondAtom < NumberOfAtoms; SecondAtom++) {	

			if (SecondAtom > FirstAtom) {

				for(let ThirdAtom = 0; ThirdAtom < NumberOfAtoms; ThirdAtom++) {

					if (ThirdAtom > SecondAtom){

						for(let FourthAtom = 0; FourthAtom < NumberOfAtoms; FourthAtom++) {

							if (FourthAtom > ThirdAtom){

								for(let CountOne = 1; CountOne < HowManyOfOneType; CountOne++) {

									for(let CountTwo = 1; CountTwo < HowManyOfOneType; CountTwo++) {

										for(let CountThree = 1; CountThree < HowManyOfOneType; CountThree++) {

											for(let CountFour = 1; CountFour < HowManyOfOneType; CountFour++) {

												SolMass = ((CountOne * IsotopMass[FirstAtom]) + (CountTwo * IsotopMass[SecondAtom]) + (CountThree * IsotopMass[ThirdAtom]) +  (CountFour * IsotopMass[FourthAtom]) - 0.00054);

												if (SolMass >= (Mass + Range)) { break; }


												if ((SolMass >= (Mass - Range)) && (SolMass <= (Mass + Range))) {
												 
													let temp = [atom[FirstAtom], CountOne, atom[SecondAtom], CountTwo, atom[ThirdAtom], CountThree, atom[FourthAtom], CountFour,  " Masse: " ,SolMass.toFixed(5)];
													Solutions[SolCount] = temp; 
													SolCount++;

												}	
												
											}
										}
									} 
								}					
							}
						}
					}
				}
			}
		}
	}




	for (let FirstAtom = 0; FirstAtom < FirstAtomNumber; FirstAtom++) { 

		for(let SecondAtom = 0; SecondAtom < NumberOfAtoms; SecondAtom++) {	

			if (SecondAtom > FirstAtom) {

				for(let ThirdAtom = 0; ThirdAtom < NumberOfAtoms; ThirdAtom++) {

					if (ThirdAtom > SecondAtom){

						for(let FourthAtom = 0; FourthAtom < NumberOfAtoms; FourthAtom++) {

							if (FourthAtom > ThirdAtom){

								for(let FifthAtom = 0; FifthAtom < NumberOfAtoms; FifthAtom++) {

									if (FifthAtom > FourthAtom){

										for(let CountOne = 1; CountOne < HowManyOfOneType; CountOne++) {

											for(let CountTwo = 1; CountTwo < HowManyOfOneType; CountTwo++) {

												for(let CountThree = 1; CountThree < HowManyOfOneType; CountThree++) {

													for(let CountFour = 1; CountFour < HowManyOfOneType; CountFour++) {

														for(let CountFive = 1; CountFive < HowManyOfOneType; CountFive++) {

															SolMass = ((CountOne * IsotopMass[FirstAtom]) + (CountTwo * IsotopMass[SecondAtom]) + (CountThree * IsotopMass[ThirdAtom]) +  (CountFour * IsotopMass[FourthAtom]) +  (CountFive * IsotopMass[FifthAtom]) - 0.00054);

															if (SolMass >= (Mass + Range)) { break; }


															if ((SolMass >= (Mass - Range)) && (SolMass <= (Mass + Range))) {
															 
																let temp = [atom[FirstAtom], CountOne, atom[SecondAtom], CountTwo, atom[ThirdAtom], CountThree, atom[FourthAtom], CountFour, atom[FifthAtom], CountFive, " Masse: " ,SolMass.toFixed(5)];
																Solutions[SolCount] = temp; 
																SolCount++;

															}
														}
													}
												}
											} 
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}



	
	console.log(Solutions); 
	let strSave = " "; 

	for (var n = 0; n < Solutions.length; n++) { 
		for (var m = 0; m < 12; m++) {			
			
			if (Solutions[n][m] != undefined && Solutions[n][m] != 1){
				strSave += (Solutions[n][m]);
			}
		}

		strSave += "<br>"; 
	}

	document.getElementById("output").innerHTML += strSave; 
}