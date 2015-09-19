Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:new, :create, :destroy, :show]
    resources :users
    resources :boards, except: [:edit]
    resources :pins
  end
end
