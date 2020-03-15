class Hospital < ApplicationRecord
  def gid
    to_sgid.to_s
  end
end
