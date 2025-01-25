Rails.application.routes.draw do
  get 'contacts/new'
  get 'contacts/create'
  root to: "academic#home"
  get "trial" => "academic#trial"

  post 'contacts', to: 'contacts#send_email', as: :contact
  # The line blow is to set the video for the welcoming of the users
  # get "home" => "pages#home"
  get "biography" => "pages#biography"
  get "media" => "pages#media"

  resources :contacts, only: [:new, :create]
  # Defines the root path route ("/")
  # root "posts#index"
end
