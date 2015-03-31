docker_image 'orderservice' do
  source 'OrderServiceDockerfile'
  tag 'OrderService1'
  action :build_if_missing
end