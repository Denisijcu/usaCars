// Set Vars of the Gallery Picture
let showGallery = '';

/** Defining UI parragraf**/
pCadillac = document.getElementById('pCadillac');
pCamaru = document.getElementById('pCamaru');
pMustang = document.getElementById('pMustang');

var cadillac = document.querySelector('#cadillac');
cadillac.addEventListener('click', fncadillac, false);
cadillac.addEventListener('mouseleave', onmouseleave, true);

function fncadillac(e) {
  var picture = cadillac.src.split('/');
  var mysrc = '../img/' + picture[4];
  showPicturesDetail(mysrc);
}

var camaru = document.querySelector('#camaru');
camaru.addEventListener('click', fncamaru, false);
camaru.addEventListener('mouseleave', onmouseleave, true);

function fncamaru(e) {
  var picture = camaru.src.split('/');
  var mysrc = '../img/' + picture[4];
  showPicturesDetail(mysrc);
}

var mustang = document.querySelector('#mustang');
mustang.addEventListener('click', fnmustang, false);
mustang.addEventListener('mouseleave', onmouseleave, true);

function fnmustang(e) {
  var picture = mustang.src.split('/');
  var mysrc = '../img/' + picture[4];
  showPicturesDetail(mysrc);
}

/*** Start Big Picture ***/
// Set Vars of Pictures Details and Zoom
bigpic = document.querySelector('#bigpic');
bigpic.addEventListener('click', shutZoom, false);

function shutZoom(e) {
  var picture = bigpic.src.split('/');
  var zoomPic = '../img/' + picture[4];

  btnClose.style.color = 'red';
  btnClose.style.backgroundColor = 'white';
  theUrl = `url("${zoomPic}")`;
  btnClose.style.backgroundImage = theUrl;


  zoomPicture(zoomPic);
}
bigpic.addEventListener('dblclick', fnStop, false);

function fnStop() {
  console.log('Stop execute');
  stop = true;
}

/*  Emd Big Picture */

/*Start with Picture Detail Front Side*/
ifront = document.querySelector('#ifront');
ifront.addEventListener('click', shutZoomFront, false);

function shutZoomFront(e) {
  var picture = ifront.src.split('/');
  var zoomPic = '../img/' + picture[4];

  btnClose.style.color = 'red';
  btnClose.style.backgroundColor = 'white';
  theUrl = `url("${zoomPic}")`;
  btnClose.style.backgroundImage = theUrl;

  zoomPicture(zoomPic);
}
/*End Picture Detail Front Side */

/*Start with Picture Detail Back Side*/
iback = document.querySelector('#iback');
iback.addEventListener('click', shutZoomBack, false);

function shutZoomBack(e) {
  var picture = iback.src.split('/');
  var zoomPic = '../img/' + picture[4];

  btnClose.style.color = 'red';
  btnClose.style.backgroundColor = 'white';

  theUrl = `url("${zoomPic}")`;
  btnClose.style.backgroundImage = theUrl;

  zoomPicture(zoomPic);
}
/*End Picture Detail Back Side */

/*Start with Picture Detail InSide*/
inside = document.querySelector('#inside');
inside.addEventListener('click', shutZoomInside, false);

function shutZoomInside(e) {
  var picture = inside.src.split('/');
  var zoomPic = '../img/' + picture[4];

  // to show the bottom close of the Zooom Window cause in this case is hide
  var btnClose = document.querySelector('#btnClose');
  btnClose.style.color = 'red';
  btnClose.style.backgroundColor = 'transparent';
  theUrl = `url("${zoomPic}")`;
  btnClose.style.backgroundImage = theUrl;

  zoomPicture(zoomPic);
}
/*End Picture Detail InSide */

/*Start with Picture Detail LeftSide*/
leftside = document.querySelector('#leftside');
leftside.addEventListener('click', shutZoomLeftside, false);

function shutZoomLeftside(e) {
  var picture = leftside.src.split('/');
  var zoomPic = '../img/' + picture[4];
  btnClose.style.color = 'red';
  btnClose.style.backgroundColor = 'transparent';
  theUrl = `url("${zoomPic}")`;
  btnClose.style.backgroundImage = theUrl;

  zoomPicture(zoomPic);
}

/*End Picture Detail LeftSide */

/*Start with Picture Detail RightSide*/
rightside = document.querySelector('#rightside');
rightside.addEventListener('click', shutZoomRightside, false);

function shutZoomRightside(e) {
  var picture = rightside.src.split('/');
  var zoomPic = '../img/' + picture[4];
  btnClose.style.color = 'Red';
  btnClose.style.backgroundColor = 'transparent';
  theUrl = `url("${zoomPic}")`;
  btnClose.style.backgroundImage = theUrl;

  zoomPicture(zoomPic);
}

/*End Picture Detail Rigthside */

/* Setting UI description Data  */
let desc = document.querySelector('#desc');
let made = document.querySelector('#made');
let year = document.querySelector('#year');
let price = document.querySelector('#price');

//functions show cadillac picture
function showPicturesDetail(mysrc) {
  stop = true;

  desc.innerHTML = '';
  made.innerHTML = '';
  year.innerHTML = '';
  price.innerHTML = '';

  carDetail.forEach(picture => {
    if (picture.pict1 === mysrc) {
      bigpic.src = picture.pict1;
      ifront.src = picture.pict1;
      iback.src = picture.pict2;
      inside.src = picture.pict3;
      rightside.src = picture.pict4;
      leftside.src = picture.pict5;

      desc.innerHTML = '' + picture.desc;
      made.innerHTML = 'Made:' + picture.made;
      year.innerHTML = 'Year:' + picture.year;
      price.innerHTML = 'Price:' + picture.price;
    }
  });
}

// Turn On the move
function onmouseleave() {
  // stop = false;
  // showGallery = setInterval(move, 6000);
}
// Turn On the move
var home = document.querySelector('#home');
home.addEventListener('dblclick', fnMoveAgain, true);

function fnMoveAgain() {
  stop = false;
  showGallery = setInterval(move, 3000);
}

// Activate the Move
showGallery = setInterval(move, 3000);
stop = false;
i = 0;

function move() {
  if (i <= cars.length - 1) {
    if (stop) {
      clearInterval(showGallery);
    } else {
      // Switch the pictures in the Car Gallery;
      fnSwitchPicturesInGallery(i);
    }
  }
  i++;
  if (i > cars.length) {
    i = 0;
  }
}

function fnSwitchPicturesInGallery(i) {
  switch (i) {
    case 0:
      {
        cadillac.src = cars[0].pict;
        camaru.src = cars[1].pict;
        mustang.src = cars[2].pict;

        bigpic.src = carDetail[1].pict1;
        ifront.src = carDetail[1].pict1;
        iback.src = carDetail[1].pict2;
        inside.src = carDetail[1].pict3;
        rightside.src = carDetail[1].pict4;
        leftside.src = carDetail[1].pict6;

        //Defining the caption
        pCadillac.innerHTML = 'Cadillac';
        pCamaru.innerHTML = 'Mustang';
        pMustang.innerHTML = 'Camaro';

        var picture = bigpic.src.split('/');
        var zoomPic = '../img/' + picture[4];

        showPicturesDetail(zoomPic);

        break;
      }
    case 1:
      {
        cadillac.src = cars[1].pict;
        camaru.src = cars[2].pict;
        mustang.src = cars[0].pict;

        bigpic.src = carDetail[2].pict1;
        ifront.src = carDetail[2].pict1;
        iback.src = carDetail[2].pict2;
        inside.src = carDetail[2].pict3;
        rightside.src = carDetail[2].pict5;
        leftside.src = carDetail[2].pict6;

        //Defining the caption
        pCadillac.innerHTML = 'Mustang';
        pCamaru.innerHTML = 'Camaro';
        pMustang.innerHTML = 'Cadillac';

        var picture = bigpic.src.split('/');
        var zoomPic = '../img/' + picture[4];

        showPicturesDetail(zoomPic);

        break;
      }
    case 2:
      {
        cadillac.src = cars[2].pict;
        camaru.src = cars[0].pict;
        mustang.src = cars[1].pict;

        bigpic.src = carDetail[0].pict1;
        ifront.src = carDetail[0].pict1;
        iback.src = carDetail[0].pict2;
        inside.src = carDetail[0].pict3;
        rightside.src = carDetail[0].pict5;
        leftside.src = carDetail[0].pict6;

        //Defining the caption
        pCadillac.innerHTML = 'Camaro';
        pCamaru.innerHTML = 'Cadillac';
        pMustang.innerHTML = 'Mustang';

        var picture = bigpic.src.split('/');
        var zoomPic = '../img/' + picture[4];

        showPicturesDetail(zoomPic);
        break;
      }
  }
  stop = false;
}




// Init the gallery animation and load the pictures
//move();

// fn to close the window Zoom
function onClose() {
  var windowZoom = document.querySelector('.zoom');
  windowZoom.style.display = 'none';
}
// fn to Shut Window Zoom
function zoomPicture(zoomPic) {
  var windowZoom = document.querySelector('.zoom');
  windowZoom.style.display = 'block';
  var picZoom = document.querySelector('#picZoom');
  picZoom.src = zoomPic;
}

/* Fill the gallery with all the pictures */

var galleryAll = document.querySelector('.allpicture');
var newDiv = document.createElement('div');
newDiv.innerHTML = `
<div>
    <ul class="listPicture animated swing" style="color: black">
    </ul>
</div> 
`;
galleryAll.appendChild(newDiv);
const listPicture = document.querySelector('.listPicture');
var texto = '';
carDetail.forEach(picture => {
  texto = texto + `
  <li> 
     <img src='${picture.pict1}' alt='${picture.desc}' />
      <p>
             ${picture.desc}
      <span> ${picture.made} </span>
      <span> ${picture.year} </span>
      <span> ${picture.price}</span>
      </p>
     
  </li>
  <li> 
     <img src='${picture.pict2}' alt='${picture.desc}' />
     <p>
             ${picture.desc}
      <span> ${picture.made} </span>
      <span> ${picture.year} </span>
      <span> ${picture.price}</span>
      </p>
  
  </li>
  <li> 
    <img src='${picture.pict3}' alt='${picture.desc}' />
    <p>
             ${picture.desc}
      <span> ${picture.made} </span>
      <span> ${picture.year} </span>
      <span> ${picture.price}</span>
    </p>
  
  </li>
  <li> 
     <img src='${picture.pict4}' alt='${picture.desc}' />
     <p>
             ${picture.desc}
      <span> ${picture.made} </span>
      <span> ${picture.year} </span>
      <span> ${picture.price}</span>
     </p>
  
  </li>
  <li> 
     <img src='${picture.pict5}' alt='${picture.desc}' />
     <p>
            ${picture.desc}
       <span> ${picture.made} </span>
       <span> ${picture.year} </span>
       <span> ${picture.price}</span>
     </p>
  </li>
  <li> 
     <img src='${picture.pict6}' alt='${picture.desc}' />
     <p>
            ${picture.desc}
     <span> ${picture.made} </span>
     <span> ${picture.year} </span>
     <span> ${picture.price}</span>
    </p>
  </li>
  `;
});
listPicture.innerHTML = texto;



/* Create the table */
//var to store the data

reg = 0;

var tableDataTemplate = `
    <div class="animated swing">
     <h2 style=" text-align: center;  background-color: #00c462; color: white"> List of Items</h2>
    <br>
    <Table>
      <theader>
         <th>Rec.</th>
         <th>Desc </th>
         <th>Model </th>
         <th>Make </th>
         <th>Price </th>
      </theader>
      <tbody>
      <tr></tr>
      
      `;
var cuerpo = '';
carDetail.forEach(fila => {
  console.log(fila);

  reg++;

  cuerpo = cuerpo + `
    
        <tr class="fila">
           <td class="fimage>
              <div class="timagen">
          <!--   <img src=${fila.pict1} alt='${fila.desc}'  width="10px" heigth="10px"/> -->
              ${reg}
              </div>
           </td>
           <td>
             <div> 
             ${fila.desc}
             </div>
           
           </td>
           <td>
             <div> 
             ${fila.made}
             </div>
           </td>
           <td>
            <div>
            ${fila.year}
            </div>
         </td>
         <td>
          <div>
           ${fila.price}
          </div>
         </td>
      </tr>
  
  `;
});

//if (init > 0) {
tableDataTemplate = tableDataTemplate + cuerpo + `</tbody></Table> </div>
<!-- Footer -->
<br>
<footer>
  <div class="menu-footer">
    <br>
    <li>
      <a href="#home">Home</a>
    </li>
    <li>
      <a href="./pages/about.html">About</a>
    </li>
    <li>
      <a href="./pages/contact.html">Contact</a>
    </li>
  </div>
  <br>
  <p style="text-align: center">Demo Flex & Grid (TechLaunch - Course) &copy; 2018</p>

  <div class="icons" style="color:white; text-align:center;">
  FOLLOW me ...
  <a href="https://twitter.com/" style="color: white; ">

    <i class="fab fa-twitter fa-2x"></i>

  </a>

  <a href="https://www.facebook.com/denis.sanchez.3914?ref=bookmarks" style="color: white">

    <i class="fab fa-facebook fa-2x"></i>

  </a>

  <a href="https://business.linkedin.com/" style="color: white">

    <i class="fab fa-linkedin fa-2x"></i>

  </a>

  <a href="https://github.com/Denisijcu" style="color: white">

    <i class="fab fa-github fa-2x"></i>

  </a>

</div>
</footer>
`;
var home = document.querySelector('#home');
var newtable = document.createElement('section');
newtable.innerHTML = tableDataTemplate;
home.appendChild(newtable);

//texto = texto + tableDataTemplate;
//listPicture.innerHTML = texto;
//}






window.addEventListener('load', move, false);