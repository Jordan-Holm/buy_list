class List < ApplicationRecord
  belongs_to :user

  validates :name, :desc, presence: true
end
