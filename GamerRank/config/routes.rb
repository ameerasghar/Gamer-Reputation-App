Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get '/static/index' => 'static#home'
  # root to: "static#index"
  resources :reviews
  resources :gamers
  root to: "static#index"
  get 'static/index'
  get 'static/about'

end
