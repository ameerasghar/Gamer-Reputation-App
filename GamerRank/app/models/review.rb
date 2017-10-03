class Review < ApplicationRecord
belongs_to :target, :class_name => 'Gamer'
end
