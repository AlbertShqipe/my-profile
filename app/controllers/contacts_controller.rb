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

  private

  def contact_params
    params.permit(:name, :email, :message)
  end
end
