class ApplicationController < ActionController::Base
  before_action :set_locale

  private

  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end

  # Keep locale in URL parameters
  def default_url_options
    { locale: I18n.locale }
  end
end
