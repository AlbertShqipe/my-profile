class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    logger.debug "Contact params: #{contact_params.inspect}" # Add this line to debug
    if @contact.save
      redirect_to root_path, notice: "Your message has been sent successfully."
    else
      render :new
    end
  end

  def send_email
    # Ensure required params are present
    name = params[:name]
    email = params[:email]
    message = params[:message]

    if name.present? && email.present? && message.present?
      # Use ActionMailer to send the email
      ContactMailer.contact_email(name, email, message).deliver_now
      flash[:notice] = "Your message has been sent successfully!"
    else
      flash[:alert] = "All fields are required."
    end

    redirect_to root_path
  end

  private

  def contact_params
    params.permit(:name, :email, :message)
  end
end
