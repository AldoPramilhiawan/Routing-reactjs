import React from 'react'

function About() {
  return (
    <div className='App'>
      <div class="container text-center" id="bio">
      <h3 class="fs-bold fs-2"><b> My Bio </b></h3>
      <p class="fs-6 fst-italic fw-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quisquam exercitationem rem voluptates, eum obcaecati, tenetur sunt deleniti temporibus fugiat mollitia modi, error doloribus consectetur esse nisi nihil fuga expedita.
      </p>

      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12">
          <h6 class="fs-5"><b>Bed cum wheel chait</b></h6>
          <p class="fw-light">Create a bed cum wheelchair model which will be very useful for
             patient who cannot move from bed and does not need anybody to make
             them lay in bed 
          </p>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12">
          <h6 class="fs-5"><b>Rock Paper Scissor game</b></h6>
          <p class="fw-light"> Create a Rock a Paper Scissor game in Python Language. This was my
              first project in Python. Learning Machine Learning with Python
          </p>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12">
          <h6 class="fs-5"><b>Voulunteer in NSS</b></h6>
          <p class="fw-light">I am a NSS volunteer and I am doing social activities with the help of institution.
             I Went to Eripatti,Pollachi and renowated schools and the surrounding areas along with 
             my student friends
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About;