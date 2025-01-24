class ContactMailer < ApplicationMailer
  default to: "s.kiblade@icloud.com" # Replace with your target email address

  def contact_email(name, email, message)
    @name = name
    @message = message
    @from_email = email

    mail(
      from: 'no-reply@albertnikolli.com',
      subject: "New Contact Form Message from #{@name}, #{@from_email}"
    )
  end
end
