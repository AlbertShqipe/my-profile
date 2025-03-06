class ContactMailer < ApplicationMailer
  default to: "albert_nikolli@icloud.com" # This is the email address that the contact form will be sent to

  def contact_email(name, email, message)
    @name = name
    @message = message
    @email = email

    mail(
      from: 'no-reply@albertnikolli.com',
      subject: "New Contact Form Message from #{@name}, #{@email}"
    )
  end
end
