Rails.application.routes.draw do
  root 'pages#index'
  get 'courses/new', to: 'courses#new'
  get 'courses/index', to: 'courses#index'
  get 'about' , to: 'pages#about'
  resources :students, except: [:destroy]
  get 'login' , to: 'logins#new'
  post 'login' , to: 'logins#create'
  delete 'logout' , to: 'logins#destroy'
end
