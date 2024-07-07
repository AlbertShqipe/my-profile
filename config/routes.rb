Rails.application.routes.draw do
  get 'contacts/new'
  get 'contacts/create'
  root to: "academic#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.

  # The line blow is to set the video for the welcoming of the users
  # get "home" => "pages#home"
  get "biography" => "pages#biography"
  get "media" => "pages#media"
  get "contacts" => "pages#contacts"

  resources :contacts, only: [:new, :create]
  # Defines the root path route ("/")
  # root "posts#index"
end
