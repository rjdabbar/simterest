Rails.application.routes.draw do
  root "static_pages#root"
  resources :users
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :boards, except: [:edit]
  end
end
