<template>
  <div class="container contact-form">
    <h2 class="text-primary">Contact Us</h2>
    <hr />
    <div class="row">
      <div class="col  border-right">
        <form method="post">
          <h5 class="text-info">You can drop us a message, we shall get back to you shortly.</h5>
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label class="control-label">Name:</label>
                <input type="text" name="txtName" class="form-control" placeholder="Your Name *" value="" />
              </div>
              <div class="form-group">
                <label class="control-label">Email:</label>
                <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *" value="" />
              </div>
              <div class="form-group">
                <textarea name="txtMsg" class="form-control" placeholder="Your Message *" rows="6"></textarea>
              </div>
              <div class="form-group">
                <input type="submit" name="btnSubmit" class="btn btn-primary" value="Send Message" />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="col text-center">
        <h5 class="text-primary">eMail us @</h5>
        <b-link class="text-muted" href="mailto:mail2kbs@gmail.com"><i class="far fa-envelope"></i> mail2kbs@gmail.com</b-link>
        <h5 class="mt-5 text-primary mb-3">Connect on social media</h5>
        <a href="https://www.facebook.com/groups/287147064772710" class="p-3 text-primary"><i class="fab fa-facebook fa-3x"></i></a>
        <a href="" class="p-3 text-danger"><i class="fab fa-youtube fa-3x"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
